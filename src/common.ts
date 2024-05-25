
//Non - Null Assertion Operator(Postfix!)

//null
interface User {
    name: string,
    email: string
};

//let user: User | null | undefined = null;

//Assertions(As)
let user = {} as User;
user = {
    name: 'user',
    email: 'hdad@fm.com'
}

interface Description {
    Pavel: string,
    Tushar: string
}
let description = {} as Description;
//as const
const friends = ['Pavel', 'Tushar'] as const;

const user2 = {
    name: 'user',
    email: 'hdad@fm.com'
} as const;


friends.forEach(item => {
    description[item] = item + 'on fire'
});

