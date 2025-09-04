import { useState, useEffect } from "react";

type WeatherState = {
    temperature: number | null;
    loading: boolean;
    error: boolean;
};

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherState>({
        temperature: null,
        loading: true,
        error: false
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://plantin-test-task.vercel.app/api/weather');
                if (!response.ok) throw new Error('Server error');

                const data = await response.json();
                setWeather({
                    temperature: data.temperature,
                    loading: false,
                    error: false
                });
            } catch (error) {
                setWeather({
                    temperature: null,
                    loading: false,
                    error: true
                });
            }
        };

        fetchWeather();
    }, []);

    return weather;
};
