import express from 'express'
import app from './app'

async function main() {
    await app.listen(8080)
    console.log('server runnning')
}

main()