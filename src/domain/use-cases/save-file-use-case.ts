import fs from 'fs'

export interface SaveFilrUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string;
    filePath?: string;
    fileName?: string;
}

export class SaveFile implements SaveFilrUseCase {
    constructor(
        /** repository: StorageRepository */
    ){}

    execute({
        fileContent, 
        filePath = 'outputs', 
        fileName = 'table'
    }: Options): boolean {

        try
        {
            fs.mkdirSync(filePath, {recursive:true})
            fs.writeFileSync(`./${filePath}/${fileName}.txt`, fileContent);    
            return true
        } catch (e) {
            console.error(e)
            return false
        }

    }
} 