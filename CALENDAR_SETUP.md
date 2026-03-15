# Calendar Integration Setup Guide

## How It Works

When a customer submits the booking form on the `/contact` page, they are shown two options:

1. **Add to Google Calendar** — opens Google Calendar in a new tab with the appointment pre-filled
2. **Add to Apple Calendar** — downloads a `.ics` file that works with Apple Calendar, Outlook, and any standard calendar app

The calendar event includes:
- Appointment date & time (1 hour duration)
- Client name, phone, email
- Selected service
- Any notes/messages
- Shop address (865 Bergen Ave #2, Jersey City, NJ 07306)
- A 30-minute reminder alarm

---

## For the Business Owner: Getting Notifications

### Option A: Google Calendar (Recommended)

To receive calendar notifications when customers book:

1. **Create a shared Google Calendar** for appointments
2. In Google Calendar → Settings → Add calendar → "Create new calendar"
3. Name it "Marina Barbershop Appointments"
4. Share it with your team's email addresses

**To auto-add events to YOUR calendar:**

Currently the "Add to Google Calendar" button opens on the **customer's** Google Calendar. To also receive events on your end, you need a backend service. Here's how:

#### Simple Approach: Google Apps Script (Free)
1. Go to [script.google.com](https://script.google.com)
2. Create a new project and paste this code:

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var cal = CalendarApp.getDefaultCalendar();
  
  var start = new Date(data.date + 'T' + data.time);
  var end = new Date(start.getTime() + 60 * 60 * 1000);
  
  var event = cal.createEvent(
    'Marina Barbershop — ' + (data.service || 'Appointment') + ' (' + data.name + ')',
    start,
    end,
    {
      description: 'Client: ' + data.name + '\n' +
                   'Phone: ' + (data.phone || 'N/A') + '\n' +
                   'Email: ' + (data.email || 'N/A') + '\n' +
                   'Service: ' + (data.service || 'N/A') + '\n' +
                   'Note: ' + (data.message || ''),
      location: '865 Bergen Ave #2, Jersey City, NJ 07306'
    }
  );
  
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', eventId: event.getId() }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy → New deployment → Web app → Execute as: Me → Access: Anyone
4. Copy the deployment URL
5. Update `src/app/contact/page.tsx` — in the `handleSubmit` function, add a fetch call:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  // Send to Google Apps Script (replace URL with your deployment URL)
  // ──────────────────────────────────────────────────────────────
  // const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
  // try {
  //   await fetch(APPS_SCRIPT_URL, {
  //     method: "POST",
  //     mode: "no-cors",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });
  // } catch (err) {
  //   console.error("Calendar sync failed:", err);
  // }
  // ──────────────────────────────────────────────────────────────
  
  setSubmitted(true);
};
```

### Option B: Apple Calendar / iCloud

The `.ics` file download already works with Apple Calendar. To receive the events yourself:

1. Ask customers to email you the `.ics` file, OR
2. Use the Google Apps Script approach above (Google Calendar syncs to Apple Calendar via CalDAV)
3. In Apple Calendar → Preferences → Accounts → Add Google Account

---

## Where to Update

| What | File | Line |
|------|------|------|
| Calendar event title format | `src/app/contact/page.tsx` | `buildGoogleCalendarUrl()` and `downloadICSFile()` functions |
| Event duration (default: 1 hour) | `src/app/contact/page.tsx` | `60 * 60 * 1000` in both functions |
| Shop address | `src/app/contact/page.tsx` | `location` field in both functions |
| Reminder time (default: 30 min) | `src/app/contact/page.tsx` | `TRIGGER:-PT30M` in `downloadICSFile()` |
| Google Apps Script URL | `src/app/contact/page.tsx` | `handleSubmit()` — uncomment and set `APPS_SCRIPT_URL` |
| Business hours validation | `src/app/contact/page.tsx` | `min="11:00" max="21:00"` on time input |

---

## Testing

1. Go to `/contact`
2. Fill out the form with a date and time
3. Submit
4. Click "Add to Google Calendar" — should open Google Calendar with pre-filled event
5. Click "Add to Apple Calendar" — should download `.ics` file
6. Open the `.ics` file — should create a calendar event with all details
