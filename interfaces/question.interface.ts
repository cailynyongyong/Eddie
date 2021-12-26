export default interface QuestionObj {
    questionType: string,
    questionCount: number,
    question: string,
    description: string,
    answers: string[] | undefined,
    answered: boolean,
    ta: string,
    invisible: boolean
}