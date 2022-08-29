export const fetchCount = (amount:Number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: amount }), 500)
    })
}