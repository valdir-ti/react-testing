type GreetProps = {
    name: string
}

export const Greet = ({ name }: GreetProps) => {
    return (
        <div>hello {name}</div>
    )
}