import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() { }

  getAllStatistics() {
    return of(this.dummy)
  }

  getStatistic(code: string | null) {
    return of(this.dummy.find(d => d.code === code ))
  }

  dummy = [{
    "code": "089d08f1-957e-4f96-974e-5c032773aa01",
    "date": "2023-03-28 09:00:00+00:00",
    "duration_minutes": "90.0",
    "club": "Padel Indoor Exemple",
    "pista": "Pista 4",
    "location": "Barcelona",
    "statistics": {
        "status": "OK",
        "all_stats": [
            {
                "id": "player",
                "order": 3,
                "title": "Estadísticas de jugador",
                "statistics": [
                    {
                        "orden": 4,
                        "id": "pct_tiempo_zonas_campo",
                        "titol": "Porcentaje de tiempo en zonas del campo",
                        "icon": null,
                        "type": "piechart",
                        "show_graph": "True",
                        "inside_title": "Zona del campo",
                        "extras": null,
                        "stat": [
                            {
                                "name": "Fondo",
                                "value": 60.0,
                                "value_orden": 1,
                                "units": "percentage",
                                "color": "#408FA2"
                            },
                            {
                                "name": "Volea",
                                "value": 40.0,
                                "value_orden": 3,
                                "units": "percentage",
                                "color": "#9ADBEF"
                            }
                        ]
                    },
                    {
                        "orden": 8,
                        "id": "golpes",
                        "titol": "Distribución de tus golpes",
                        "icon": null,
                        "type": "piechart",
                        "show_graph": "False",
                        "inside_title": null,
                        "extras": null,
                        "stat": [
                            {
                                "name": "% a derecha",
                                "value": 24.0,
                                "value_orden": 1,
                                "units": "percentage",
                                "color": "#408FA2"
                            },
                            {
                                "name": "% a revés",
                                "value": 56.0,
                                "value_orden": 3,
                                "units": "percentage",
                                "color": "#9ADBEF"
                            },
                            {
                                "name": "% al centro",
                                "value": 20.0,
                                "value_orden": 2,
                                "units": "percentage",
                                "color": "#52AFD0"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "team",
                "order": 2,
                "title": "Estadísticas de equipo",
                "statistics": [
                    {
                        "orden": 5,
                        "id": "pct_basc_vertical",
                        "titol": "Basculación vertical",
                        "icon": null,
                        "type": "progressbar",
                        "show_graph": "True",
                        "inside_title": null,
                        "extras": null,
                        "stat": {
                            "name": "% tiempo basculación vertical",
                            "value": 76.0,
                            "value_orden": 1,
                            "units": "percentage",
                            "color": "959D53"
                        }
                    },
                    {
                        "orden": 6,
                        "id": "pct_basc_hor",
                        "titol": "Basculación horizontal",
                        "icon": null,
                        "type": "progressbar",
                        "show_graph": "True",
                        "inside_title": null,
                        "extras": null,
                        "stat": {
                            "name": "% tiempo basculación horizontal",
                            "value": 78.0,
                            "value_orden": 1,
                            "units": "percentage",
                            "color": "#408FA2"
                        }
                    }
                ]
            }
        ]
    },
    "fun_fact": "Eres el jugador que más ha corrido con 1.500m, el doble que el jugador J4.",
    "recomendation": "Intenta controlar más la colocación de tu primer saque: tienes un 37% vs 21% de media el resto de jugadores  (y 12% de WPT)"
}]

}
