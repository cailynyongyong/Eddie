export default interface QuestionObj {
    questionType: string,
    questionCount: number,
    question: string,
    askedBy: number,
    description: string,
    answers: string[] | undefined,
    answered: boolean,
    ta: {
        name: string,
        email: string
    },
    createdOn: number,
    invisible: boolean,
    id: number
}