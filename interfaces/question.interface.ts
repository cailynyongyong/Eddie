import Answer from './answer.interface';

export default interface QuestionObj {
    questionType: string,
    upvoteCount: number,
    question: string,
    askedBy: number,
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