import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { debug } from 'console'

export interface Operator{
    id: string,
    name: string,
    class: string,
    level: number,
    pot: number,
    skill1: string,
    skill2: string,
    skill3: string
}

const fileDir = path.join(process.cwd(), '/data/arknights')

export async function FetchData(){
    // console.log(fileDir)
    const opsFiles = fs.readdirSync(fileDir)
    // console.log("Directory files: " + opsFiles)
    const ops = opsFiles.map((fileName) =>{
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(fileDir, fileName)
        const opDetail = fs.readFileSync(fullPath, 'utf-8')
        // console.log("Operators: " + opDetail)
        const matterResult = matter(opDetail)
        // console.log(matterResult)
        return{
            id,
            ...matterResult.data
        }
    })
    // console.log(ops)
    return {
        ops
    }
}