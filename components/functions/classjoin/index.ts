export type ClassJoinAction = (...args: string[]) => string;

const classjoin: ClassJoinAction = (...args) => args.filter(Boolean).join(' ');

export default classjoin;
