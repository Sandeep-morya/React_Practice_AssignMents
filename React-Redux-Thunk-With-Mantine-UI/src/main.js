// :: Used to get data from localStorage ::
export const getFromCloud = (key) => {
  return localStorage.getItem(key);
};
// :: Used to send data on localStorage ::
export const sendToCloud = (key, value) => {
  localStorage.setItem(key, value);
};
// :: Used to remove specific/(pramas) data from local storage ::
export const removeFromCloud = (key) => {
  localStorage.removeItem(key);
};
