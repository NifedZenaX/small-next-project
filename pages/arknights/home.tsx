import Link from "next/link";
import React from "react";
import { FetchData, Operator } from "../../arknights/fetch";
import styles from '../../styles/Home.module.css'

export default function Main({ akData }: any){
    return(
        <div>
            <h1>Arknights Page</h1>
            <ul>
                { akData.ops.map((op: Operator) => (
                    <li className={styles.description} key={op.id}>
                        Name: {op.name}
                        <br />
                        Class: {op.class}
                        <br />
                        Level: {op.level}
                        <br />
                        Potential: {op.pot}
                        <br />
                        Skill 1: {op.skill1}
                        <br />
                        Skill 2: {op.skill2}
                        <br />
                        Skill 3: {op.skill3}
                    </li>
                )) }
            </ul>
            <h3 className={styles.card}>
                <Link href="/">Back</Link>
            </h3>
        </div>
    )
}

export async function getStaticProps(){
    const akData = await FetchData()
    // console.log(akData) 
    return {
        props: {
            akData,
        }
    }
}