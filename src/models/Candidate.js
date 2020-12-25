const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  hoja_vida_id: {
    type: {
      type: "String",
    },
    minimum: {
      type: "Number",
    },
    maximum: {
      type: "Number",
    },
  },
  id_dni: {
    oneOf: {
      type: ["Mixed"],
    },
  },
  id_ce: {
    oneOf: {
      type: ["Mixed"],
    },
  },
  id_nombres: {
    type: {
      type: "String",
    },
  },
  id_apellido_paterno: {
    type: {
      type: "String",
    },
  },
  id_apellido_materno: {
    type: {
      type: "String",
    },
  },
  id_sexo: {
    type: {
      type: "String",
    },
  },
  nacimiento_fecha: {
    type: {
      type: "String",
    },
  },
  nacimiento_pais: {
    type: {
      type: "String",
    },
  },
  nacimiento_departamento: {
    type: {
      type: "String",
    },
  },
  nacimiento_provincia: {
    type: {
      type: "String",
    },
  },
  nacimiento_distrito: {
    type: {
      type: "String",
    },
  },
  postula_ubigeo: {
    type: {
      type: "String",
    },
  },
  postula_departamento: {
    type: {
      type: "String",
    },
  },
  postula_provincia: {
    type: {
      type: "String",
    },
  },
  postula_distrito: {
    type: {
      type: "String",
    },
  },
  cargo_id: {
    type: {
      type: "String",
    },
    minimum: {
      type: "Number",
    },
    maximum: {
      type: "Number",
    },
  },
  cargo_nombre: {
    type: {
      type: "String",
    },
  },
  org_politica_id: {
    type: {
      type: "String",
    },
    minimum: {
      type: "Number",
    },
    maximum: {
      type: "Number",
    },
  },
  org_politica_nombre: {
    type: {
      type: "String",
    },
  },
  educacion: {
    $ref: {
      type: "String",
    },
  },
  experiencia: {
    $ref: {
      type: "String",
    },
  },
  sentencias: {
    $ref: {
      type: "String",
    },
  },
  ingresos: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  bienes: {
    $ref: {
      type: "String",
    },
  },
  info_adicional: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  contraloria: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  redam: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  servir: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  trayectorias: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  revocatoria: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  vacancia: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  anotaciones_marginales: {
    type: {
      type: "String",
    },
    items: {
      $ref: {
        type: "String",
      },
    },
  },
  enlaces: {
    $ref: {
      type: "String",
    },
  },
});

mongoose.model("Candidate", candidateSchema);
