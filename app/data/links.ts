export const bookingUrl =
  "https://app.acuityscheduling.com/schedule.php?owner=34858509&calendarID=12080701";

export const instagramUrl = "https://www.instagram.com/barberfarr/";

export const googleReviewsUrl =
  "https://www.google.com/search?q=moli+barbers+reviews&oq=mol&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIKCAEQLhixAxiABDIKCAIQLhixAxiABDIGCAMQRRg5MhAIBBAuGMcBGLEDGNEDGIAEMhAIBRAuGK8BGMcBGIAEGI4FMgYIBhBFGD0yBggHEEUYPdIBCDQwNDNqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0xa5f410bf85e2f0f7:0x99be54aa0ce89370,1,,,,";

export const getServiceBookingUrl = (appointmentId: string) =>
  `https://app.acuityscheduling.com/schedule/4e324f59/appointment/${appointmentId}/calendar/12080701?calendarIds=12080701`;

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Avening+G2+Priory+Park+London+Road+Tetbury+GL8+8HZ";

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
