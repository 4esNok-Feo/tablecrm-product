"use client";

import { useEffect, useState } from "react";

type NomenclatureItem = {
  id: string;
  name: string;
};

export default function ProductForm() {
  const [data, setData] = useState<NomenclatureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/nomenclature");
        const json = await res.json();
        if (res.ok) {
          setData(json);
        } else {
          throw new Error(json.error || "Не удалось получить данные");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p style={{ color: "red" }}>Ошибка: {error}</p>;

  return (
    <div style={{ padding: "1rem", maxWidth: "600px" }}>
      <h2>Создание продукта</h2>

      <form>
        <label>
          Название продукта:
          <input type="text" name="name" style={{ width: "100%", marginBottom: "1rem" }} />
        </label>

        <label>
          Выберите номенклатуру:
          <select name="nomenclature" style={{ width: "100%", marginBottom: "1rem" }}>
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Описание:
          <textarea name="description" style={{ width: "100%", marginBottom: "1rem" }} />
        </label>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Создать продукт
        </button>
      </form>
    </div>
  );
}