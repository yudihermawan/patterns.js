let count = 0;

const increment = () => {
    count++;
};

const decrement = () => {
    count--;
};

const getCount = () => {
    return count;
};

export { increment, decrement, getCount };
