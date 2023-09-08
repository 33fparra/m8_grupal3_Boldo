
//punto 13
import express from "express";
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from "fs";
import cors from "cors";

import { Joya } from "./Class/Joya.js";

const app = express();
const joya = new Joya();

app.use(express.json());

const storage = multer.memoryStorage(); // Usamos memoryStorage ya que procesaremos la imagen antes de guardarla
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png') {
            return cb(new Error('Solo se permiten imágenes PNG'));
        }
        cb(null, true);
    }
});

// Suponiendo que tienes un modelo de Joya, lo importarías así:
// import Joya from './models/Joya.mjs';

app.use('/jewel/images', express.static(path.join(__dirname, 'public/images')));

app.post('/jewel/upload/:id', upload.single('image'), async (req, res) => {
    try {
        const id = req.params.id;
        const buf = req.file.buffer;

        const colorImgPath = path.join(__dirname, `public/images/${id}_color.png`);
        const bwImgPath = path.join(__dirname, `public/images/${id}_bw.png`);

        await sharp(buf).resize(400).toFile(colorImgPath);
        await sharp(buf).resize(400).grayscale().toFile(bwImgPath);

        // Aquí actualizarías la joya en tu base de datos con las nuevas URLs
        // Por ejemplo:
        // const joya = await Joya.findById(id);
        // joya.imageColorUrl = `/jewel/images/${id}_color.png`;
        // joya.imageBWUrl = `/jewel/images/${id}_bw.png`;
        // await joya.save();

        res.json({
            message: 'Imágenes subidas y procesadas con éxito',
            colorUrl: `/jewel/images/${id}_color.png`,
            bwUrl: `/jewel/images/${id}_bw.png`
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, ()=>{console.log("Levantado puerto http://localhost:3000")});