import get from 'axios'
import {createWriteStream} from 'fs'

const apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani'

const fetchData = async () => {
  try {
    // Fetch data from the Al-Quran API
    const response = await get(apiUrl)

    if (response.status === 200) {
      const apiData = response.data.data.surahs

      // Transform the data according to Sanity's schema
      const ayahId = apiData.map((item) => item.ayahs.map((i) => i.number.toString()))
      const juzId = apiData.map((item) => item.ayahs.map((i) => i.juz.toString()))
      const pageId = apiData.map((item) => item.ayahs.map((i) => i.page.toString()))
      const hizbQuarterId = apiData.map((item) => item.ayahs.map((i) => i.hizbQuarter.toString()))
      const rukuId = apiData.map((item) => item.ayahs.map((i) => i.ruku.toString()))
      const surahId = apiData.map((item) => item.number.toString())

      const transformedData = (
        apiData.map((item) => ({
          _id: surahId,
          _type: 'surahs',
          number: item.number,
          name: item.name,
          englishName: item.englishName,
          englishNameTranslation: item.englishNameTranslation,
          revelationType: item.revelationType,
          ayahs: [{_type: 'reference', _ref: ayahId}],
        })),
          apiData.map((item) => ({
            _id: ayahId,
            _type: 'ayahs',
            text: item.ayahs.map((i) => i.text),
            numberInSurah: item.ayahs.map((i) => i.numberInSurah),
            juz: {_type: 'reference', _ref: juzId},
            manzil: item.manzil,
            page: {_type: 'reference', _ref: pageId},
            ruku: {_type: 'reference', _ref: rukuId},
            hizbQuarter: {_type: 'reference', _ref: hizbQuarterId},
            sajda: item.ayahs.map((i) => i.sajda),
          })),
          apiData.map((item) => ({
            _id: juzId,
            _type: 'juz',
            juz: item.ayahs.map((i) => i.juz),
            ayahs: [{_type: 'reference', _ref: ayahId}],
          })),
          apiData.map((item) => ({
            _id: pageId,
            _type: 'page',
            page: item.ayahs.map((i) => i.page),
            ayahs: [{_type: 'reference', _ref: ayahId}],
          })),
          apiData.map((item) => ({
            _id: hizbQuarterId,
            _type: 'hizbQuarter',
            hizbQuarter: item.ayahs.map((i) => i.hizbQuarter),
            ayahs: [{_type: 'reference', _ref: ayahId}],
          })),
          apiData.map((item) => ({
            _id: rukuId,
            _type: 'ruku',
            hizbQuarter: item.ayahs.map((i) => i.ruku),
            ayahs: [{_type: 'reference', _ref: ayahId}],
          }))
      )

      // Write the transformed data to a NDJSON file
      const ndjsonFileName = 'quran_uthmani.ndjson'
      const ndjsonStream = createWriteStream(ndjsonFileName, {flags: 'a'})
      console.log(typeof transformedData)

      transformedData.forEach((item) => {
        ndjsonStream.write(JSON.stringify(item) + '\n')
      })

      ndjsonStream.end()

      console.log(`Data has been successfully transformed and written to ${ndjsonFileName}`)
    } else {
      console.error(`Failed to fetch data from the API. Status code: ${response.status}`)
    }
  } catch (error) {
    console.error('Error fetching data:', error.message)
  }
}

// Call the function to start the process
fetchData()

// const quranApi = 'https://api.alquran.cloud/v1/quran/quran-uthmani'

// const fetchedData = async () => {
//   try {
//     const response = await fetch('quranApi')
//     console.log(response)
//     return response.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error
//   }
// }

// function transform(fetchedData) {
//   const surahId = fetchedData.surahs.englishName.toLowerCase()
//   const surahs = {
//     _type: 'surahs',
//     _id: surahId,
//     number: fetchedData.surahs.number,
//     name: fetchedData.surahs.name,
//     englishName: fetchedData.surahs.englishName,
//     englishNameTranslation: fetchedData.surahs.englishNameTranslation,
//     revelationType: fetchedData.surahs.revelationType,
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   const ayahId = fetchedData.surahs.ayahs.number.toString()
//   const ayahs = {
//     _id: ayahId,
//     _type: 'ayahs',
//     text: fetchedData.surahs.ayahs.text,
//     numberInSurah: fetchedData.surahs.ayahs.numberInSurah,
//     juz: {_type: 'reference', _ref: juzId},
//     manzil: {_type: 'manzil', _ref: manzilId},
//     page: {_type: 'page', _ref: pageId},
//     ruku: {_type: 'ruku', _ref: rukuId},
//     hizbQuarter: {_type: 'hizbQuarter', _ref: hizbQuarterId},
//     sajda: fetchedData.surahs.ayahs.sajda,
//   }
//   const juzId = fetchedData.surahs.ayahs.juz.toString()
//   const juz = {
//     _id: juzId,
//     _type: 'juz',
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   const manzilId = fetchedData.surahs.ayahs.manzil.toString()
//   const manzil = {
//     _id: manzilId,
//     _type: 'manzil',
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   const pageId = fetchedData.surahs.ayahs.page.toString()
//   const page = {
//     _id: pageId,
//     _type: 'page',
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   const rukuId = fetchedData.surahs.ayahs.ruku.toString()
//   const ruku = {
//     _id: rukuId,
//     _type: 'ruku',
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   const hizbQuarterId = fetchedData.surahs.ayahs.ruku.toString()
//   const hizbQuarter = {
//     _id: hizbQuarterId,
//     _type: 'hizbQuarter',
//     ayahs: {type: 'array', _ref: ayahId},
//   }
//   return [surahs, ayahs, juz, manzil, page, ruku, hizbQuarter]
// }

// // const surahs = documents.filter((doc) => doc._type === 'surahs')

// // const ayahs = documents.filter((doc) => doc._type === 'ayahs')
// // const juz = documents.filter((doc) => doc._type === 'juz')
// // const manzil = documents.filter((doc) => doc._type === 'manzil')
// // const page = documents.filter((doc) => doc._type === 'page')
// // const ruku = documents.filter((doc) => doc._type === 'ruku')
// // const hizbQuarter = documents.filter((doc) => doc._type === 'hizbQuarter')

// // const allayahsWritten = Promise.all(ayahs.map(ayahs =>
// //   client.createOrReplace(ayahs)
// // ))
// //   const allCatsWritten = allCountriesWritten.then(() =>
// //   Promise.all(catBreeds.map(cat => client.createOrReplace(cat)))
// // )
// export default transform
