import Answer from './answer.interface';

export default interface QuestionObj {
    questionType: string,
    question: string,
    askedBy: number,
    section: number,
    description: string,
    answers: Answer[] | undefined,
    answered: boolean,
    ta: {
        name: string,
        email: string
    },
    createdOn: number,
    invisible: boolean,
    id: number
}