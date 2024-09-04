import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
@JsonIgnoreProperties(ignoreUnknown = true) //Allows me to ignore data fields from the api call I don't care about (local names)
public class weatherJSON {
    private List<Weather> weather;
    private Main main;
    private String name;
    private int cod;

    public List<Weather> getWeather() {
        return weather;
    }
    public void setWeather(List<Weather> weather) {
        this.weather = weather;
    }
    public Main getMain() {
        return main;
    }
    public void setMain(Main main) {
        this.main = main;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getCod() {
        return cod;
    }
    public void setCod(int cod) {
        this.cod = cod;
    }
    @Override
    public String toString() {
        return "WeatherJSON{" +
                "weather=" + weather +
                ", main=" + main +
                ", name='" + name + '\'' +
                ", cod=" + cod +
                '}';
    }



    public static class Weather{
        private int id;
        private String main;
        private String description;
        private String icon;

        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }
        public String getMain() {
            return main;
        }
        public void setMain(String main) {
            this.main = main;
        }
        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
        public String getIcon() {
            return icon;
        }
        public void setIcon(String icon) {
            this.icon = icon;
        }

        @Override
        public String toString() {
            return "Weather{" +
                    "id=" + id +
                    ", main='" + main + '\'' +
                    ", description='" + description + '\'' +
                    ", icon='" + icon + '\'' +
                    '}';
        }
    }

    public static class Main {
        private double temp;
        private double feels_like;
        private double temp_min;
        private double temp_max;
        private int pressure;
        private int humidity;
        private int sea_level;
        private int grnd_level;

        public double getTemp() {
            return temp;
        }
        public void setTemp(double temp) {
            this.temp = temp;
        }
        public double getFeels_like() {
            return feels_like;
        }
        public void setFeels_like(double feels_like) {
            this.feels_like = feels_like;
        }
        public double getTemp_min() {
            return temp_min;
        }
        public void setTemp_min(double temp_min) {
            this.temp_min = temp_min;
        }
        public double getTemp_max() {
            return temp_max;
        }
        public void setTemp_max(double temp_max) {
            this.temp_max = temp_max;
        }
        public int getPressure() {
            return pressure;
        }
        public void setPressure(int pressure) {
            this.pressure = pressure;
        }
        public int getHumidity() {
            return humidity;
        }
        public void setHumidity(int humidity) {
            this.humidity = humidity;
        }

        public int getSea_level() {
            return sea_level;
        }

        public void setSea_level(int sea_level) {
            this.sea_level = sea_level;
        }

        public int getGrnd_level() {
            return grnd_level;
        }

        public void setGrnd_level(int grnd_level) {
            this.grnd_level = grnd_level;
        }

        @Override
        public String toString() {
            //Converts default kelvin into fahrenheit
            return "temp=" + convertToFahrenheit(temp) + "F" +
                    ", feels_like=" + convertToFahrenheit(feels_like) + "F" +
                    ", temp_min=" + convertToFahrenheit(temp_min) + "F" +
                    ", temp_max=" + convertToFahrenheit(temp_max) + "F" +
                    ", pressure=" + pressure +
                    ", humidity=" + humidity;
        }
        public int convertToFahrenheit(double d){
            return (int) ((d - 273.15) * 9/5 +32);
        }
    }

}
