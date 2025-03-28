export const formatMessage = (message) => {
    return message.trim().replace(/\s+/g, ' ');
};

export const isValidMessage = (message) => {
    return message && message.length > 0;
};

export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};