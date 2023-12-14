import get from 'axios'
import {createWriteStream} from 'fs'
import {createClient} from '@sanity/client'
import {uuid} from '@sanity/uuid'

const clients = createClient({
  projectId: 'o1bqd984',
  dataset: 'production',
  useCdn: false,
  token:
    'skY7COgoZTFrUSijxzISEPnvnoPOxgA9ySLDw7cUAWrHQY6RlUjRo0vsmHR68NA9j7Aj83yhOElzdN4lajSkPKNBS1tqb3HGDAAReTRKEV8mGxDmDOz9VoJTo1HYsHs6kDqi7NnFea4pgV8NleD7EEslWY0TanpsQRxJEXxjgC9jYb06sfUy',
  apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani'

const fetchData = async () => {
  try {
    // Fetch data from the Al-Quran API
    const response = await get(apiUrl)

    if (response.status === 200) {
      const apiData = response.data.data.surahs

      // Transform the data according to Sanity's schema
      let ayahId
      let juzId
      let pageId
      let hizbQuarterId, rukuId, surahId
      let i;
      for (i = 0; i <= 7000; i++) {
        ayahId = uuid()
        juzId = uuid()
        pageId = uuid()
        hizbQuarterId = uuid()
        surahId = uuid()
        rukuId = uuid()
      }
      

      const transformedData = (surahId) => {
        apiData.map((item) => ({
          _id: surahId,
          _type: 'surahs',
          number: item.number,
          name: item.name,
          englishName: item.englishName,
          englishNameTranslation: item.englishNameTranslation,
          revelationType: item.revelationType,
          ayahs: [{_type: 'reference', _ref: ayahId}],
        }))
      }

      try {
        // Split the data into batches (adjust batchSize based on your needs)
        const batchSize = 100
        const dataBatches = Array.from(
          {length: Math.ceil(transformedData(surahId).length / batchSize)},
          (_, index) => transformedData.slice(index * batchSize, (index + 1) * batchSize),
        )

        // Import each batch sequentially
        for (const batch of dataBatches) {
          const result = await clients.createOrReplace(batch).catch((err) => {
            console.error('Error importing data to Sanity.io:', err)
            throw err
          })

          console.log('Data batch imported successfully:', result)
        }
      } catch (error) {
        console.error('Import process failed:', error)
      }
    } else {
      console.error(`Failed to fetch data from the API. Status code: ${response.status}`)
    }
  } catch (error) {
    console.error('Error fetching data:', error.message)
  }
}

// import client from '../sanity'

// const fetchedData = async () => {
//   try {
//     const response = await fetch('quranApi')
//     jsData = JSON.parse(JSON.stringify(response.trim()))
//     console.log(jsData.data)
//     return jsData.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error
//   }
// }

// function transform(fetchedData) {
//   const surahId = fetchedData.surahs.englishName.toLowerCase()
//   const surahs = {
//     _id: surahId,
//     _type: 'surahs',
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

// export const fetches = async () => {
//   try {
//     await fetch('quranApi')
//       .then((res) => res.json())
//       .then((quran) => quran.map(transform))
//       .then((pairs) => flatten(pairs))
//       .then((documents) => {
//         let transaction = client.transaction()

//         documents.forEach((document) => {
//           transaction.createOrReplace(document)
//         })

//         return transaction.commit()
//       })
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error
//   }
// }
fetchData()
//  apiData.map((item) => ({
//           _id: ayahId,
//           _type: 'ayahs',
//           text: item.ayahs.map((i) => i.text),
//           numberInSurah: item.ayahs.map((i) => i.numberInSurah),
//           juz: {_type: 'reference', _ref: juzId},
//           manzil: item.ayahs.map((i) => i.manzil),
//           page: {_type: 'reference', _ref: pageId},
//           ruku: {_type: 'reference', _ref: rukuId},
//           hizbQuarter: {_type: 'reference', _ref: hizbQuarterId},
//           sajda: item.ayahs.map((i) => i.sajda),
//         })),
//         apiData.map((item) => ({
//           _id: juzId,
//           _type: 'juz',
//           juz: item.ayahs.map((i) => i.juz),
//           ayahs: [{_type: 'reference', _ref: ayahId}],
//         })),
//         apiData.map((item) => ({
//           _id: pageId,
//           _type: 'page',
//           page: item.ayahs.map((i) => i.page),
//           ayahs: [{_type: 'reference', _ref: ayahId}],
//         })),
//         apiData.map((item) => ({
//           _id: hizbQuarterId,
//           _type: 'hizbQuarter',
//           hizbQuarter: item.ayahs.map((i) => i.hizbQuarter),
//           ayahs: [{_type: 'reference', _ref: ayahId}],
//         })),
//         apiData.map((item) => ({
//           _id: rukuId,
//           _type: 'ruku',
//           hizbQuarter: item.ayahs.map((i) => i.ruku),
//           ayahs: [{_type: 'reference', _ref: ayahId}],
//         })))
