interface CreateTableUseCase {
    execute: (options: Options) => string;
}

interface Options {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase{
    constructor(
        /**
         * DI: Dependency injection
         */
    ){}

    execute({base, limit}:Options){
        let outputMessage = ''
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * 1}\n`
        }

        return outputMessage;
    }
}