export const getInitials = (username: string) => {
  return username
    .split(" ")
    .map((word) => word[0])
    .join("");
};

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);
};
