import { deleteTask } from "../api/api";


export default function DeleteBtn(id) {

    async function delTask(x) {
        const paramId = x.id
        try {
            const res = await deleteTask(paramId)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <a href="/">
                <button onClick={() => { delTask(id); }}>
                    Borrar!!!
                </button>
            </a>
        </>
    )
}
