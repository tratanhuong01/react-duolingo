
const questions = [
    {
        id: -1,
        type: 'speak',
        name: 'Milk, please!',
        line: 2,
        options: [{ id: 0, value: "sữa" }, { id: 1, value: "Vui" }, { id: 2, value: "Vâng" }, { id: 3, value: "phê" },
        { id: 4, value: "Duo" }, { id: 5, value: "Xin" }, { id: 6, value: "lòng" }, { id: 7, value: "cho" }],
        answer: "Vui lòng cho sữa"
    },
    {
        id: 0,
        type: 'read',
        name: 'Cảm ơn!',
        line: 1,
        options: [{ id: 0, value: "or" }, { id: 1, value: "bye" }, { id: 2, value: "no" }, { id: 3, value: "Thank" },
        { id: 4, value: "water" }, { id: 5, value: "you" }],
        answer: "Thank you"
    },
    {
        id: 1,
        type: 'speak',
        name: 'I live in Hanoi.',
        line: 2,
        options: [{ id: 0, value: "tôi" }, { id: 1, value: "học" }, { id: 2, value: "tốt" }, { id: 3, value: "bạn" }, { id: 4, value: "sống" },
        { id: 5, value: "xe" }, { id: 6, value: "Hà" }, { id: 7, value: "Nội" }, { id: 8, value: "ở" }],
        answer: "tôi sống ở Hà Nội"
    },
    {
        id: 5,
        type: 'speak',
        name: null,
        line: 2,
        options: [{ id: 0, value: "i" }, { id: 1, value: "house" }, { id: 2, value: "live" }, { id: 3, value: "a" },
        { id: 4, value: "big" }, { id: 5, value: "in" }, { id: 6, value: "small" }, { id: 7, value: "car" }],
        answer: "I live in a small house"
    },
    {
        id: 2,
        type: 'speak',
        name: 'Yes, I am from Vietnam.',
        line: 2,
        options: [{ id: 0, value: "đến" }, { id: 1, value: "bạn" }, { id: 2, value: "mỹ" }, { id: 3, value: "cơm" },
        { id: 4, value: "Nam" }, { id: 5, value: "là" }, { id: 6, value: "Việt" }, { id: 7, value: "tôi" },
        { id: 8, value: "từ" }, { id: 9, value: "Vâng" }],
        answer: "Vâng tôi đến từ Việt Nam"
    },
    {
        id: 3,
        type: 'read',
        name: 'Không, cảm ơn.',
        line: 1,
        options: [{ id: 0, value: "drink" }, { id: 1, value: "No" }, { id: 2, value: "you" }, { id: 3, value: "thank" }],
        answer: "No thank you"
    },
    {
        id: 4,
        type: 'speak',
        name: 'my mother and my father',
        line: 2,
        options: [{ id: 0, value: "và" }, { id: 1, value: "tôi" }, { id: 2, value: "bố" }, { id: 3, value: "mừng" },
        { id: 4, value: "viên" }, { id: 5, value: "của" }, { id: 6, value: "tôi" }, { id: 7, value: "của" },
        { id: 8, value: "chó" }, { id: 9, value: "mẹ" }],
        answer: "Mẹ và bố của tôi"
    },
    {
        id: 6,
        type: 'speak',
        name: 'Do you know her name?',
        line: 2,
        options: [{ id: 0, value: "ấy" }, { id: 1, value: "có" }, { id: 2, value: "của" }, { id: 3, value: "Bạn" },
        { id: 4, value: "đô" }, { id: 5, value: "cô" }, { id: 6, value: "không" }, { id: 7, value: "quan" },
        { id: 8, value: "đen" }, { id: 9, value: "bốn" }, { id: 10, value: "biết" }, { id: 11, value: "tên" }],
        answer: "Bạn có biết tên của cô ấy không"
    },
];

export default questions;