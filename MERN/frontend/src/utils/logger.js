export const printLog = (...args) => {
    if (process.env.REACT_APP_ENV === "development") 
        console.log(...args);
};

window.printLog = printLog; 