export const main = `
<div class="bg-sky-50 h-screen flex items-center justify-center ml-10 mr-10">
    <div class="bg-sky-50 w-full h-full flex flex-col md:flex-row">
        <div class="flex-1 p-6 flex flex-col justify-center items-center">
            <textarea 
                id="text"
                class="text-blue-900 placeholder:text-blue-900 bg-sky-50 text-2xl w-full h-64 md:h-2/3 p-4 border-none rounded-lg focus:outline-none resize-none" 
                placeholder="Ingrese el texto aquí"></textarea>
            <div class="flex gap-10 mt-4 w-full">
                <button id="btnEncrypt" class="sm:text-sm md:text-base lg:text-lg w-2/4 bg-blue-900 text-white py-3 px-4 rounded-lg transition hover:bg-blue-950 duration-300 ">Encriptar</button>
                <button id="btnDecrypt" class="sm:text-sm md:text-base lg:text-lg bg-gray-200 w-2/4 border border-blue-800 text-blue-800 py-3 px-4 rounded-lg transition hover:bg-gray-300 duration-300">Desencriptar</button>
            </div>
        </div>
        <div id="result" class="bg-white w-full mb-5 xl:mt-20 md:mt-20 sm:mt-5 sm:mb-10 md:w-1/3 p-6 flex flex-col justify-center items-center h-4/5 shadow-2xl rounded-lg mb-10 relative">
            <img src="public/img/img.png" alt="Ilustración" class="w-2/3 mb-4">
            <p class="text-gray-500 text-center">Ningún mensaje fue encontrado</p>
            <p class="text-gray-700 text-center">Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>
    </div>
</div>
`
