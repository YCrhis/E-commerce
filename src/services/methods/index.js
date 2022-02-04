const GET = () => {
    return {
        method: 'GET',
    };
};

const POST = body => {
    return {
        method: 'POST',
        headers: {
            Accept: 'Application/json',
        },
        body: JSON.stringify(body),
    };
};

export { GET, POST }