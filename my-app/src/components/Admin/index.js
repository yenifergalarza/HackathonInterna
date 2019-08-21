import Chart from 'react-google-charts';
import Header from '../header'
import { useCollection } from 'react-firebase-hooks/firestore';
import { ordersData } from '../../controller/Firebase/authentication';
import React, { useState } from "react";

import Map from "./Map";

const Admin = (props) => {
    const [value, loading, error] = useCollection(
        ordersData,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );


  
    const [markersData, setMarkersData] = useState([
        { latLng: { lat: -12.130137, lng:-77.006225}, title: "Molino Santa Rosa" },
{ latLng: { lat:-12.134081, lng: -77.017040}, title: "Molino Santa Rosa" },
{ latLng: { lat: -12.136808, lng:  -77.007341 }, title: "Molino Santa Rosa" },

{ latLng: { lat: -12.135675, lng: -77.000173}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" },
{ latLng: { lat: -12.151409, lng: -77.011031}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" },

{ latLng: { lat: -12.168420, lng:  -76.995281}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" },
{ latLng: { lat:  -12.171963, lng: -76.968893}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" },
{ latLng: { lat: 12.064703, lng: -77.018675}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" }

,{ latLng: { lat: -12.008941, lng: -77.078783}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" }

,{ latLng: { lat: -12.046992, lng: -77.094595}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" }

,{ latLng: { lat: -12.198673, lng: -76.995690}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" }

,{ latLng: { lat:  -12.008941, lng: -77.078783}, title: "Predio Central Alicorp (Galleter?a Lima, Molino Faucett, Fideer?a Lima, Balanceados, Copsa" },
{ latLng: { lat: -12.210034, lng: -76.976732}, title: "Molino Callao" },
{ latLng: { lat: -12.201717, lng:  -76.986110}, title: "Molino Callao" },
{ latLng: { lat:-12.095738, lng: -77.055440}, title: "Molino Callao" }, 
 
{ latLng: { lat:  -12.171852, lng: -76.971463}, title: "Molino Callao" },  
{ latLng: { lat:  -12.047541, lng: -77.013092}, title: "Molino Callao" },  
    { latLng: { lat: -11.983529, lng: -77.071369}, title: "Molino Callao" },
    { latLng: { lat: -12.047687, lng: -77.125783}, title: "Molino Callao" },
   { latLng: { lat: -12.083847, lng: -77.090195}, title: "Molino Callao" },
   { latLng: { lat: -12.129759, lng: -76.994037}, title: "Molino Callao" }
]);
    
      function addMarker() {
        const lastMarker = markersData[markersData.length - 1];
    
        setMarkersData([
          ...markersData,
          {
            title: +lastMarker.title + 1,
            latLng: {
              lat: lastMarker.latLng.lat + 0.0001,
              lng: lastMarker.latLng.lng + 0.0001
            }
          }
        ])}
     
    return (
        <>
            <Header />
            <div className="container-fluid">  <h5>Hola,name,este es el reporte del mes</h5>
                <div className="container  col-12 col-sm-12 col-md-12">
                    <img onClick={() => { props.history.push("/admin") }}  className="redirect" />
                    <div className="container-fluid" style={{ "display": "flex", "flex-wrap": "wrap" }}>
                        <Chart className=" col-12 col-sm-12 col-md-12"
                            width={'300px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Detergente', 11],
                                ['Pasta', 2],
                                ['Aceite', 2],
                                ['Conserva', 2],
                                ['Jabón', 7],
                            ]}
                            options={{
                                title: 'Categoría más Pedida',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                        <Chart className=" col-12 col-sm-12 col-md-12"
                            width={'300px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Productos', '2019 Population', '2000 Population'],
                                ['Atún', 8175000, 8008000],
                                ['Primor', 3792000, 3694000],
                                ['Opal', 2695000, 2896000],
                                ['Marcio', 2099000, 1953000],
                                ['Aceite', 1526000, 1517000],
                            ]}
                            options={{
                                title: 'El producto más Comprado',
                                chartArea: { width: '50%' },
                                hAxis: {
                                    title: 'Total Population',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: 'Productos',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                    <div class="table-responsive">
                        {error && <strong>Error: {JSON.stringify(error)}</strong>}
                        {loading && <span>Collection: Loading...</span>}
                        {value && (
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">nombre</th>
                                        <th scope="col">DNI</th>
                                        <th scope="col">Sede</th>
                                        <th scope="col">resumen</th>
                                        <th scope="col">Monto</th>
                                        <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                                <tbody>   {value.docs.map(doc => (

                                    <tr key={doc.id}>
                                        <th scope="row">1</th>
                                        <td>{doc.data().name}</td>
                                        <td>{doc.data().dni}</td>
                                        <td>{doc.data().sede}</td>
                                        <td>{doc.data().cart.map(prod => (<p>{prod.name}</p>))}</td>
                                        <td>{doc.data().bill}</td>
                                        <td >{ Date.now(doc.data().time)} </td>
                                    </tr>


                                ))}
                                </tbody>
                            </table>)}
                    </div>
                    <div>
      <Map markersData={markersData} />
      <button onClick={addMarker}>Add marker</button>
      <ul>
        Markers data:
        {markersData.map(marker => (
          <li key={marker.title}>
            {marker.title}, lat: {marker.latLng.lat}, lng: {marker.latLng.lng},
          </li>
        ))}
      </ul>
    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;


/* <Chart
                 width={'500px'}
                 height={'300px'}
                 chartType="BarChart"
                 chartType="Table"
                 loader={<div>Loading Chart</div>}

                 data={[
                     [
                         { type: 'string', label: 'El Resumen General' },

                     ],


                 ]}


                 options={{
                     title: 'El Resumen General',
                     showRowNumber: true,

                 }}
                 rootProps={{ 'data-testid': '1' }}
             /> */
/*    <Chart
       width={'500px'}
       height={'300px'}
       chartType="BarChart"
       chartType="Table"
       loader={<div>Loading Chart</div>}

       data={[
           [
               { type: 'string', label: 'Nombre' },
               { type: 'number', label: 'DNI' },
               { type: 'string', label: 'Sede' },
               { type: 'string', label: 'Resumen' },
           ],
           ['Juan', 49763426, ' Nicovita ', ' Aceite F. '],
           ['Jim', 48608657, ' Teal ', ' Primor '],
           ['Alice', 64375579, ' Molino Santa Rosa ', ' Bolivar '],
           ['Bob', 57438087, ' Sidsur ', ' Alianza '],
       ]}


       options={{
           title: 'El Resumen General',
           showRowNumber: true,

       }}

       rootProps={{ 'data-testid': '1' }}
   /> */
