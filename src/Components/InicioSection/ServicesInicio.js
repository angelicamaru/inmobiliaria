const ServiciosInicio = () => {
  const services = [
    {
      name: "Venta y arriendo",
      calif: "3",
      descr:
        "Encuentra aquí todo tipo de lugares acomodados a todo lo que necesitas y a los mejores precios.",
    },
    {
      name: "Administración",
      calif: "4",
      descr:
        "Proporcionamos servicio de administración para conjuntos residenciales y clubes",
    },
    {
      name: "Avalúos",
      calif: "1",
      descr:
        "Brindamos asesoría especializada para determinar el valor comercial de su bien",
    },
  ];
  return services.map((p) => (
    <div>
      <div className="service">
        <h2>Nombre:{p.name}</h2>
        <p>Calificación: {p.calif}</p>
        <p>Descripción: {p.descr}</p>
      </div>
    </div>
  ));
};

export default ServiciosInicio;
