import axios from 'axios';

const MEMORY_API_BASE_URL = '127.0.0.1:9001/';

class MemoryService {

    getAllMemories(){
        return axios.get(MEMORY_API_BASE_URL);
    }

    createMemory(memory){
        return axios.post(MEMORY_API_BASE_URL, + 'memory/', memory);
    }

    getMemoryById(memoryId){
        return axios.get(MEMORY_API_BASE_URL + 'memory/' + memoryId);
    }

    updateMemory(memory, memoryId){
        return axios.put(MEMORY_API_BASE_URL + 'memory/' + memoryId, memory);
    }

    deleteMemory(memoryId){
        return axios.delete(MEMORY_API_BASE_URL + 'memory/' + memoryId);
    }
}

export default new MemoryService()