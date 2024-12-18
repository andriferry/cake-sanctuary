export const initialName = (nameValue: string) => {
    var initials = '';
    var names = nameValue.split(' ');
    for (let n = 0; n < names.length; n++) {
        initials += names[n].substring(0, 1).toUpperCase();
    }

    return initials;
};
