export default interface QuestionObj {
    questionType: string,
    questionCount: number,
    question: string,
    description: string,
    answers: string[] | undefined,
    answered: string,
    ta: string,
    invisible: boolean
}