<template>
    <div class="text-white">
        <div class="bg-[#06021f]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:h-[400px]">
                    <div class="hidden lg:flex bg-[url('/pictures/cozumcu.webp')] bg-cover bg-center rounded-r-xl">
                        <!-- <img src="/pictures/cozumcu.webp" alt="cozumcu"
                            class="w-[48rem] max-w-none rounded-xl sm:w-[57rem] lg:w-[48rem] lg:max-w-none" width="500"
                            height="500"> -->
                    </div>
                    <div class="lg:pl-8 flex flex-col justify-center">
                        <h1 class="text-3xl font-bold text-white">Çözümcü Kimdir?</h1>
                        <p class="text-lg leading-8 text-gray-300">
                            Şirketlerin platformdaki ilanlarına çözüm bulan mühendis, tasarımcı, akademisyen, öğrenci,
                            sanatçı vb. her türlü meslek grubundan insanlar
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="bg-gradient-to-b from-[#06021f] to-transparent">
            <div class="bg-gradient-to-t from-[#06021f] to-transparent py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h1 class="mb-20 xl:text-left text-center text-white">Neden SOLCE mi dersiniz?</h1>
                    <div class="flex lg:flex-row flex-col flex-wrap gap-x-5 gap-y-10 xl:justify-between justify-center">
                        <div class="flex flex-col items-center lg:items-start">
                            <div
                                class="bg-[url('/pictures/neden1.webp')] w-[350px] h-[300px] bg-center bg-cover rounded-lg overflow-hidden">
                            </div>
                            <div class="border mt-5 p-5 rounded-lg w-[350px]">
                                <h2 class="text-sky-600">Problem:</h2>
                                <p class="text-sm ">Şirketler, AR-GE harcamalarına ayırdıkları büyük kaynaklar
                                </p>
                                <h2 class="text-sky-600 mt-5">Çözüm:</h2>
                                <p class="text-sm ">Şirketler, AR-GE harcamalarını azaltmak için şirketlerle çözümleri bir
                                    araya getiren platform
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center lg:items-start">
                            <div
                                class="bg-[url('/pictures/neden2.webp')] w-[350px] h-[300px] bg-center bg-cover rounded-lg overflow-hidden">
                            </div>
                            <div class="border mt-5 p-5 rounded-lg w-[350px]">
                                <h2 class="text-sky-600">Problem:</h2>
                                <p class="text-sm ">Proje yarışmalarında yapılan masraflar karşılığında
                                    istenilen sonuçlar elde edilemediği gibi hedef kitleye mesajlar doğru verilmemektedir.
                                </p>
                                <h2 class="text-sky-600 mt-5">Çözüm:</h2>
                                <p class="text-sm ">Proje yarışmalarını istenilen
                                    kitleye ulaştırmak ve
                                    çözümcüler için ek gelir
                                    sağlamak
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center lg:items-start">
                            <div
                                class="bg-[url('/pictures/neden3.webp')] w-[350px] h-[300px] bg-center bg-cover rounded-lg overflow-hidden">
                            </div>
                            <div class="border mt-5 p-5 rounded-lg w-[350px]">
                                <h2 class="text-sky-600">Problem:</h2>
                                <p class="text-sm ">girişimcilerin yatırımcılara ulaşmaması ve şirketlerin yeni fikirlere
                                    ulaşmaması
                                </p>
                                <h2 class="text-sky-600 mt-5">Çözüm:</h2>
                                <p class="text-sm ">Şirketlerin yaptığı yatırımları girişimcilere ve yeni fikirlere
                                    yapılmasını sağlayan platform
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ChevronDoubleDownIcon } from '@heroicons/vue/20/solid'
</script>

<style scoped>
p {
    text-align: justify;
}
</style>
