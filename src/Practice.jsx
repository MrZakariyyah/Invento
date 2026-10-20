import Head from './practice_components/Head'

function Practice(){
    let books = ['who wants to be a millionare','Art of making neccessary choices', 'your next five mooves']


    return(
        <div>
            <Head books={books} />
        </div>
    )
}


export default Practice