import { Map, useMap, useMapsLibrary, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { ComponentRef, useEffect, useRef } from "react";
// import { ComponentRef, useEffect, useRef } from "react";

type Polyline = google.maps.Polyline;

type MapProps = {
  width?: string;
  height?: string;
  onShapeDraw?: (polygon: Polyline) => void;
}

const MaponMap = ({
  width = "100%",
  height = "200px",
}: MapProps) => {
  const containerRef = useRef<ComponentRef<"div"> | null>(null);
  const map = useMap();
  const geometryLibrary = useMapsLibrary('geometry');
  

  useEffect(() => {
    if (!map) return;

    const path = geometryLibrary?.encoding.decodePath('kppzIugzqCIe@LGBAA^@JAD?JCFEFSJqAx@]Hm@b@]PmCpCg@b@IOEOAYkH{TIM?C@QAIAIQi@W}@@Q@ODMXk@NOhG}IBCnA{CXo@LODC@??CBEFG|B_CXWn@y@FOR[X]hGiGB@DGZ]xBgCjAcAn@UrCsA@[NiAT_Bb@iCPALJJLxItH~AZD?B?@BNFV@FAvCIv@?zDS|ASpAg@p@_@h@i@h@a@VSbHgHrMsPtBeDzEmKDc@IQIU_@gAO[Wq@m@u@]Uc@KYL]MgC][M@Q?Y@[Bu@n@aKDKFFHDFFxAjABJBJBJBFF@');

    const polyline = new google.maps.Polyline({
      strokeColor: "#39B0FA",
      strokeOpacity: 1,
      strokeWeight: 3,
      path
    });
    polyline.setMap(map);
  })

  return (
    <div style={{ width, height }} ref={containerRef}>
      <Map mapId={"mapon-frontend"}  defaultCenter={{ lat: 56.927973, lng: 24.081653 }} defaultZoom={10}>
        <AdvancedMarker position={{ lat: 56.927973, lng: 24.081653 }} >
          <Pin
            background={'#98CA02'}
            borderColor={'#65B200'}
            glyphColor={'#ffffff'}
          />
        </AdvancedMarker>
      </Map>
    </div>
  );
};

export default MaponMap;