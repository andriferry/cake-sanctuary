export const initialName = (nameValue: string) => {
  let initials = '';
  const names = nameValue.split(' ');
  for (let n = 0; n < names.length; n++) {
    initials += names[n].substring(0, 1).toUpperCase();
  }

  return initials;
};
