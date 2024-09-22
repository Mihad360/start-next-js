
const getDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const page = async ({params}) => {

    const {title, body} = await getDetails(params.id)

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default page;