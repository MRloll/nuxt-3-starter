export function useDateTimeFormate(locale: string = "en") {
  function formatToTimeString(dateTime: Date) {
    if (!dateTime) return;
    const time = new Date(dateTime).toLocaleTimeString(locale, {
      hour: "numeric",
      minute: "2-digit",
    });

    if (locale === "ar") {
      // const isPM = String(time).toLowerCase().includes("pm");
      return `${time.replace(/\s?(AM|PM)/i, "")} `;
    }

    return time;
  }

  function formatToDateString(dateTime: Date) {
    if (!dateTime) return;

    const date = new Date(dateTime);
    // return new Intl.DateTimeFormat(locale, {
    let formattedDate = new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    // Check for iPhone/Safari user agent
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Remove comma only in Safari (which includes iPhones)
    if (isSafari && locale === "ar") {
      formattedDate = formattedDate.replace(/،\s(?=\d{4})/, " ");
    }

    return formattedDate;
  }

  function dateAndTime(dateTime: Date, type = "both") {
    if (!dateTime) return;

    const date = formatToDateString(dateTime);
    const time = formatToTimeString(dateTime);

    switch (type) {
      case "date":
        return date;
      case "time":
        return time;
      case "both":
      default:
        // return `${date} ${time}`;
        return `${date} \u2022 ${time}`; // \u2022 is the bullet character
    }
  }
  function momentLikeDate(date, time) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    let day = date.getDate().toString().padStart(2, "0");

    if (time) {
      let hours = time.getHours().toString().padStart(2, "0");
      let minutes = time.getMinutes().toString().padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    return `${year}-${month}-${day}`;
  }

  return {
    formatToTimeString,
    formatToDateString,
    dateAndTime,
    momentLikeDate,
  };
}
