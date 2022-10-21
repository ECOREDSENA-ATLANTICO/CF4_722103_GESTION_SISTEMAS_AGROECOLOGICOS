<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Cronograma y actividades del manejo agroecológico

    p.mb-5 El manejo agroecológico parte del reconocimiento de las interacciones e interrelaciones socioambientales; además, considera criterios sistémicos en el manejo, como forma de gestión de un modelo multidimensional agrícola, para lo cual se deben tener en cuenta:

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.lg-0
        .jumbotron-4.p-5(data-aos="fade-right") 
            .col-5.col-lg-10
            img.mb-4(src='@/assets/curso/images/tema3/ico_1.svg'  alt='', style="width:90px; display:block; margin:auto 0 ;")
            h3.mt-3 Modelos de desarrollo agroecológicos: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle.th-4
                | Buscan la diversificación temporal y espacial de los cultivos. 
              li 
                i.fas.fa-circle.th-4
                | Integración de las producciones vegetales y animales. 
              li 
                i.fas.fa-circle.th-4
                | Optimización de los recursos naturales de uso agrícola.

      .col-lg-5.lg-0
        .jumbotron-3.p-5(data-aos="fade-left")
            .col-5.col-lg-10
            img(src='@/assets/curso/images/tema3/ico_2.svg',  alt='', style="width:90px; display:block; margin:auto 0 ;")
            h3.mt-3 Objetivos de producción: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Lograr el desarrollo, la productividad y la utilidad social a largo plazo. 
              li 
                i.fas.fa-circle
                | Evaluar el avance de las iniciativas sostenibles.
              li 
                i.fas.fa-circle
                | Hallar la causa de las limitaciones que afecten el funcionamiento.
              li 
                i.fas.fa-circle
                | Identificar el potencial.
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5

    Separador

    #t_3_1.titulo-segundo
      .h2 3.1  Indicadores de la agroecología
    

    .row.mb-5
      .col-lg-12
        .bg_3.p-4.pb-0
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/images/tema3/img_1.svg')
            .col-lg-7
              p.mb-3 Una forma de diagnosticar un sistema agrícola y su estado es a través de indicadores de sostenibilidad agroecológica, donde:
              ul.lista-ul--color
                li 
                  i.fas.fa-circle
                  p.mb-0 Miden cambios y progresos.
                li 
                  i.fas.fa-circle
                  p.mb-0 Identifican necesidades de mejora.
                li 
                  i.fas.fa-circle
                  p.mb-0 Miden riesgos.
                li 
                  i.fas.fa-circle
                  p.mb-0 Hay eficiencia en el sistema productivo.
                li 
                  i.fas.fa-circle
                  p.mb-0 Incrementan los servicios socioeconómicos y ecológicos.
                li 
                  i.fas.fa-circle
                  p.mb-0 Previenen la degradación de la biodiversidad. 
                li 
                  i.fas.fa-circle
                  p.mb-0 Tienen viabilidad económica.

    p.mb-3 Los indicadores se construyen por medio de la evaluación de agroecosistemas reales, así:


    .row.align-items-center.justify-content-center.fondo-9.my-5
      .col-lg-10(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/fig_1.png')

    Separador

    #t_3_2.titulo-segundo
      .h2 3.2   Metodología para la evaluación de sistemas de manejo 

    .row.align-items-center.justify-content-center.mb-5     
      .col-lg-7(data-aos="fade-right") 
        p.mb-3 La metodología para la evaluación de sistemas de manejo incorporando indicadores de sostenibilidad (MESMIS) es una herramienta empleada para ejecutar diagnósticos sobre el estado del agroecosistema; a su vez, ofrece una guía de actividades a implementar, estandarizadas y con directrices de análisis claras. MESMIS genera respuestas endógenas, por lo que se podría considerar que es un método en construcción permanente y sus características fundamentales, de acuerdo con lo expuesto por Astier (2007), son:

      .col-7.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema3/img_2.png'  alt='')

    .row.justify-content-center.align-items-center.my-3
      .col-7.col-lg-12
        SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_3.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-3
                  h4.text-center.mb-0 Es relativista
                  p.text-center.mt-3  Porque establece los límites del sistema a estudiar y un horizonte temporal de evaluación, especificando los actores y sus objetivos particulares.
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_4.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  h4.text-center.mb-0 Es constructivista
                  p.text-center.mt-3  Puesto que adapta el método al objeto de estudio y a los involucrados.
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_4.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  h4.text-center.mb-0 Exige múltiples criterios
                  p.text-center.mt-3  Ya que incorpora criterios ambientales, sociales y económicos.
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_5.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-3 
                  h4.text-center.mb-0 Posee un enfoque sistémico e integrador
                  p.text-center.mt-3 Ya que entiende el sistema agrícola como un conjunto de subsistemas que se interrelacionan y actúan como una unidad de producción sustentable o potencialmente sustentable.
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_6.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  h4.text-center.mb-0 Demanda participación
                  p.text-center.mt-3  Involucra la participación real de los agentes implicados.
            .tarjeta.tarjeta_grey-1
              .row.justify-content-center.align-items-center
                img.mt-3(src='@/assets/curso/images/tema3/ico_7.svg',  alt='', style="width:200px; display:block; margin:auto 0 ;")
                .p-4 
                  h4.text-center.mb-0 Es multidisciplinar
                  p.text-center.mt-3  Porque exige el concurso de profesionales de diferentes áreas para poder evaluar las múltiples dimensiones involucradas.
           
    p.mb-3 MESMIS parte del supuesto que un agroecosistema sostenible integra atributos como: estabilidad, productividad, resiliencia, confiabilidad, equidad, autosuficiencia, adaptabilidad, entre otros.

    .row.align-items-center.justify-content-center.p-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 4.
          span <i>Atributos y criterios diagnósticos de un agroecosistema sustentable.</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade")
        .tabla-a.color-acento-botones.mb-5(data-aos="zoom-in-up") 
          table
            caption Nota. Tomada de Astier (2007).
            thead
              tr
                th.th-1  Atributos 
                th.th-5 Criterios diagnósticos 
     
            tbody
              tr
                td Productividad
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle.th-4
                      | Eficacia y eficiencia productiva 
                    li 
                      i.fas.fa-circle.th-4
                      | Rendimiento obtenido
              
              tr
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle
                      | Estabilidad
                    li 
                      i.fas.fa-circle
                      | Confiabilidad
                    li 
                      i.fas.fa-circle
                      | Resiliencia
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle.th-4
                      | Tendencia de los rendimientos
                    li 
                      i.fas.fa-circle.th-4
                      | Empleo de recursos renovables
                    li 
                      i.fas.fa-circle.th-4
                      | Diversidad biológica y económica
                    li 
                      i.fas.fa-circle.th-4
                      | Prevención de riesgos

              tr
                td Adaptabilidad

                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle.th-4
                      | Opciones productivas
                    li 
                      i.fas.fa-circle.th-4
                      | Capacidad de cambio e innovación
                    li
                      i.fas.fa-circle.th-4
                      | Proceso de capacitación
                   
              tr
                td Equidad
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle.th-4
                      | Distribución de costes y beneficios
                    li 
                      i.fas.fa-circle.th-4
                      | Democracia en las tomas de decisiones
                    li 
                      i.fas.fa-circle.th-4
                      | Participación efectiva
   
              tr
                td Autosuficiencia 
                td 
                  ul.lista-ul--color
                    li 
                      i.fas.fa-circle.th-4
                      | Control de las relaciones con el exterior
                    li 
                      i.fas.fa-circle.th-4
                      | Nivel de organización
                    li 
                      i.fas.fa-circle.th-4
                      | Dependencia de recursos externos


      p.mb-3 A partir de las fortalezas y debilidades del sistema, se procede a definir los indicadores asociados al modelo de desarrollo agroecológico; observe algunos ejemplos al respecto de algunos indicadores:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 5
      span  Indicadores asociados al modelo de desarrollo agroecológico
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-10.m-top.mb-0.cs
    .tabla-a.color-acento-botones.mb-5(data-aos="zoom-in-up") 
      table
        caption(style="font-weight:500;background-color:#F8F8F8;") Nota. Tomada de Alfonzo et al. (2008). 
        thead(style="border:0")
          tr(style="background-color:#60876C;")
            th.text-center.text-white(style="font-size:18px;border:0;") Atributos
            th.text-center.text-white(style="font-size:18px;border:0;") Indicador
            th.text-center.text-white(style="font-size:18px;border:0;") Descripción
        tbody
          tr(style="background-color:#fff;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Productividad
          tr(style="background-color:#fff;")
            td.p-4 Eficiencia en el sistema productivo.
            td.p-4 Relación entre los productos resultantes y los insumos empleados en un determinado proceso productivo (E=B/C).
          tr(style="background-color:#fff;")
            td.p-4 Nivel de ingresos.
            td.p-4 Diferencias entre beneficios totales y costos totales (I=B-C).
          tr(style="background-color:#fff;")
            td.p-4 Uso potencial de la tierra.
            td.p-4 Relación de la superficie utilizada con la utilizable 100 [UP=(SU/U)x100].
          tr(style="background-color:#fff;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Estabilidad
          tr(style="background-color:#fff;")
            td.p-4 Independencia de insumos externos.
            td.p-4 % costos de producción de origen externo.
          tr(style="background-color:#fff;")
            td.p-4 Acceso al agua.
            td.p-4 Nivel de disponibilidad de agua (categoría cualitativa).
          tr(style="background-color:#fff;")
            td.p-4 Fertilidad del suelo.
            td.p-4 Macronutrientes. 
          tr(style="background-color:#fff;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Equidad
          tr(style="background-color:#fff;")
            td.p-4 Distribución del ingreso.
            td.p-4 % de asignación de los ingresos.
          tr(style="background-color:#fff;")
            td.p-4 Equidad en la toma de decisiones.
            td.p-4 Número de decisiones tomadas por un miembro o en consenso.
          tr(style="background-color:#fff;")
            td.p-4(style="border-left:0;" rowspan="2") Nivel de agrobiodiversidad.
          tr(style="background-color:#fff;")
            td.p-4.h5.text-center Adaptabilidad
            td.p-4 Índices de diversidad de especies cultivadas.
          tr(style="background-color:#fff;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Autogestión
          tr(style="background-color:#fff;")
            td.p-4 Autosuficiencia alimentaria.
            td.p-4 % de alimentos consumidos que son producidos en el predio.
          tr(style="background-color:#fff;")
            td.p-4 Potencial de innovación.
            td.p-4 Capacidad de generar y ejecutar proyectos novedosos (categoría cualitativa).
          tr(style="background-color:#fff;")
            td.p-4 Nivel de participación comunitaria.
            td.p-4 % de asistencias a reuniones de consejos comunales.

    .row.align-items-center.justify-content-center.p-3
      .col-lg-12(data-aos="zoom-in-up")  
        .jumbotron-5.p-3
          p.mb-3 La medición de los indicadores se desarrolla a través de un método estadístico básico que permite establecer sus valores. Estos valores se estandarizan de acuerdo con lo establecido en la siguiente ecuación:
          .row.align-items-center.justify-content-center.fondo-11.p-5
            .col-lg-3
              h3 Donde:
              p.mb-0 <b>ND =</b> Nivel de desempeño del indicador
              p.mb-0 <b> V </b>= Valor medido del indicador
              p.mb-0 <b>Vmax =</b> Valor máximo del indicador
              p.mb-0 <b>Vmin =</b> Valor mínimo del indicador
            .col-lg-5
              img.mb-5(src='@/assets/curso/images/tema3/formula.svg')
              
 
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/images/tema3/img_3.svg')
          .col-lg-5(data-aos="fade-left")
            p.mb-3 Los valores obtenidos son evaluados en una escala de 5 puntos, de tal forma que:
            ul.lista-ul--color
              li
                i.fas.fa-circle.th-4
                p.mb-0 De 81 a 100 % equivalen a 5
              li 
                i.fas.fa-circle.th-4
                p.mb-0 De 61 a 80 % equivalen a 4
              li 
                i.fas.fa-circle.th-4
                p.mb-0 De 41 a 60 % equivalen a 3
              li 
                i.fas.fa-circle.th-4
                p.mb-0 De 21 a 40 % equivalen a 2
              li 
                i.fas.fa-circle.th-4
                p.mb-0 De 0 a 20 % equivalen a 1
            
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-10
        p.mb-3 La interpretación de los resultados se realiza de mayor a menor, siendo 5 un modelo de producción con el mayor grado de sostenibilidad y 1 el de menor grado de avance.

        p.mb-3 Finalmente, los resultados obtenidos para cada uno de los parámetros evaluados se deben presentar a través de un mapa multicriterio tipo AMOEBA. Este diagrama representa el grado de sostenibilidad asociado al modelo de producción agroecológico. Obsérvelo:


    .row.align-items-center.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-right")
          h5 Figura 5
          span Diagrama AMOEBA


    .row.align-items-center.justify-content-center.my-5
      .col-lg-10(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema3/fig_2.svg')

    .row.align-items-center.justify-content-center
      .col-lg-10
        .jumbotron-2.p-2
          p.mb-0 Nota. Tomada de Alfonzo et al. (2008).

    Separador

    #t_3_3.titulo-segundo
      .h2 3.3  Normativa ambiental

    .row.justify-content-center.align-items-center.d-none.d-lg-block.mb-3        
      .col-lg
        .custom_box_left-6(data-aos="fade-left") 
          p.mb-3 El marco normativo utilizado en Colombia para la regulación, cuidado y delimitación de los recursos naturales es amplio y contempla que el aprovechamiento y uso de estos, a través de la ejecución de actividades agrícolas y pecuarias, no están exentos de la regulación, por lo cual, cada productor es responsable del uso que les dé a los recursos naturales que se encuentran en el agroecosistema.
    
    .row.mb-5.d-block.d-lg-none
      .col-lg-11
        .tarjeta-avatar
          .tarjeta.fondo-12
            .p-5
              p.mb-3 El marco normativo utilizado en Colombia para la regulación, cuidado y delimitación de los recursos naturales es amplio y contempla que el aprovechamiento y uso de estos, a través de la ejecución de actividades agrícolas y pecuarias, no están exentos de la regulación, por lo cual, cada productor es responsable del uso que les dé a los recursos naturales que se encuentran en el agroecosistema.
              
    .row.align-items-center.justify-content-center
      .col-lg-11
        p.mb-3 Observe la legislación ambiental al respecto:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-5
                p.mb-3 Es obligación que cada productor conozca y entienda la normativa para el recurso suelo, uso, tenencia y aprovechamiento de las aguas, disposición de residuos sólidos, líquidos y material particulado que se genere del proceso productivo.
              .col-12.col-lg-7
                img(src="@/assets/curso/images/tema3/img_4.png").mb-3
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-5
                h4.mb-3 Normatividad reguladora
                p.mb-0 1. Recurso suelo, uso, tenencia.
                p.mb-0 2. Aprovechamiento de las aguas.
                p.mb-0 3. Disposición de residuos sólidos, líquidos y material particulado que se genere del proceso productivo.
        
              .col-lg-7
                img(src="@/assets/curso/images/tema3/img_5.png").mb-3

            .row.justify-content-center.align-items-star.fondo-13.p-3
              .row.align-items-center.justify-content-center.mb-5
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-right") 
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_9.svg'  alt='', style="width:120px; display:block; margin:auto 0 412;")
                        .row.justify-content-center.align-items-center
                          h3.text-center.mt-3 Artículo 7:
                          p.text-center.mb-5 Hace reconocimiento expreso de la pluralidad étnica y cultural de la Nación, así como del deber del Estado para su protección.
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-left")
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_10.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;")
                        .row.justify-content-center.align-items-center
                          h3.mt-4.text-center Artículo 8:
                          p.text-center.mb-5 Establece la obligación del Estado y las personas para  con la conservación de las riquezas naturales y culturales de la Nación.

            .row.justify-content-center.align-items-star.fondo-13.p-3
              .row.align-items-center.justify-content-center.mb-5
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-right") 
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_11.svg'  alt='', style="width:120px; display:block; margin:auto 0 412;")
                        .row.justify-content-center.align-items-center
                          h3.text-center.mt-3 Artículo 49:
                          p.text-center.mb-4 Consagra como servicio público la atención de la salud y el saneamiento ambiental, y ordena al Estado la organización, dirección y reglamentación de los mismos.
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-left")
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_12.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;")
                        .row.justify-content-center.align-items-center
                          h3.mt-3.text-center Artículo 58:
                          p.text-center.mb-5 Establece que la propiedad es una función social que implica obligaciones y, como tal, le es inherente una función ecológica.
            

            .row.justify-content-center.align-items-star.fondo-13.p-3
              .row.align-items-center.justify-content-center.mb-5
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-right") 
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_13.svg'  alt='', style="width:120px; display:block; margin:auto 0 412;")
                        .row.justify-content-center.align-items-center
                          h3.text-center.mt-3 Artículo 63:
                          p.text-center.mb-0 Determina que los bienes de uso público, los parques naturales, las tierras comunales de grupos étnicos y los demás bienes que determine la Ley son inalienables, imprescriptibles e inembargables.
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-left")
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_14.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;")
                        .row.justify-content-center.align-items-center
                          h3.mt-5.text-center Artículo 79:
                          p.text-center.mb-5 Consagra el derecho de todas las personas residentes en el país de gozar de un ambiente sano.

            .row.justify-content-center.align-items-star.fondo-13.p-3
              .row.align-items-center.justify-content-center.mb-5
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-right") 
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_15.svg'  alt='', style="width:120px; display:block; margin:auto 0 412;")
                        .row.justify-content-center.align-items-center
                          h3.text-center.mt-3 Artículo 80:
                          p.text-center.mb-4 Establece como deber del Estado   la planificación del manejo y aprovechamiento de los recursos naturales, para garantizar su desarrollo sostenible.
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-left")
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_16.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;")
                        .row.justify-content-center.align-items-center
                          h3.mt-4.text-center Artículo 88:
                          p.text-center.mb-5 Consagra acciones populares para la protección de derechos e intereses colectivos sobre el medio ambiente, entre otros, bajo la regulación de la Ley.


            .row.justify-content-center.align-items-star.fondo-13.p-3
              .row.align-items-center.justify-content-center.mb-5
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-right") 
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_17.svg'  alt='', style="width:120px; display:block; margin:auto 0 412;")
                        .row.justify-content-center.align-items-center
                          h3.text-center.mt-3 Artículo 95:
                          p.text-center.mb-5 Establece como deber de las personas la protección de los recursos culturales y naturales del país, así como de velar por la conservación de un ambiente sano.
                .col-lg-5.lg-0
                  .jumbotron-6.p-5(data-aos="fade-left")
                      .col-12.col-lg-10
                        .row.justify-content-center.align-items-center
                          img(src='@/assets/curso/images/tema3/ico_18.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;")
                        .row.justify-content-center.align-items-center
                          h3.mt-5.text-center Artículo 330:
                          p.text-center.mb-0 Establece la administración autónoma de los territorios indígenas con ámbitos de aplicación en los usos del suelo y la preservación de los recursos naturales entre otros (UPME, 2021).


















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
