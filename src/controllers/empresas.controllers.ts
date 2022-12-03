import { Request, Response } from "express";
import { EmpresasSchema } from "../model/empresas.schema";
import mongoose, {ObjectId}  from "mongoose";


export const obtenerEmpresas = (req: Request, res: Response) => {
    EmpresasSchema.find()
          .then((result) => {
              res.send({message: 'Empresas alero',result});
              res.end();
          })
          .catch((error) => {
        res.send(error);
              res.end();
      });
  }


export const agregarEmpresaCategoria = (req: Request, res: Response) => {
    EmpresasSchema.updateOne({_id: req.params.id},
      {
        $push: { 
            empresas: {
                
                _id: new mongoose.Types.ObjectId(req.body.id),  
                nombreEmpresa:     req.body.nombreEmpresa,
                imagenEmpresa:      req.body.imagenEmpresa,
                descripcion:        req.body.descripcion,
                calificacion:       req.body.calificacion,
                banner:             req.body.banner,
                coordenadasEmpresa: req.body.coordenadasEmpresa,
                productos:          req.body.productos,
              
            } 
        }
      }
    ).then(result => {
      res.send({message: 'Empresa agregada', result});
      res.end();
    }).catch(error => {
      res.send({message: 'Ocurrio un error', error});
      res.end();
    })
  };