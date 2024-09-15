export function useLocalStorage() {
    function setItem<T>(key: string, value: T){
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error);
            
        }
    }

    function getItem(key: string){
        try {
           localStorage.getItem(key)
        } catch (error) {
            console.log(error);
            
        }
    }

    function deleteItem(key: string){
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.log(error);
        }
    }

    return { setItem, getItem, deleteItem }

}