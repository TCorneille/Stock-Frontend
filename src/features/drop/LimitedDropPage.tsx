import {
  useGetProductQuery,
  useReserveProductMutation
} from "./dropApi";
import { useCountdown } from "../../hooks/useCountdown";
import { useState } from "react";

export const LimitedDropPage = () => {
  const {
    data: product,
    isLoading,
    isError,
    refetch
  } = useGetProductQuery(undefined, {
    pollingInterval: 5000 // 🔥 real-time every 5s
  });

  const [
    reserveProduct,
    { data: reservation, isLoading: reserving, isError: reserveError }
  ] = useReserveProductMutation();

  const timeLeft = useCountdown(reservation?.expiresAt);

  const handleReserve = async () => {
    try {
      await reserveProduct().unwrap();
    } catch {
      // handled via isError
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !product) return <div>Error loading product</div>;

  const soldOut = product.stock === 0;
  const expired = timeLeft === 0 && reservation;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>

      <p>
        {soldOut ? "Sold Out" : `${product.stock} left`}
      </p>

      {!reservation && (
        <button
          onClick={handleReserve}
          disabled={soldOut || reserving}
        >
          {reserving ? "Reserving..." : "Reserve"}
        </button>
      )}

      {reservation && !expired && (
        <div>
          <h3>Reservation Active</h3>
          <p>
            {Math.floor(timeLeft / 60000)}:
            {Math.floor((timeLeft % 60000) / 1000)
              .toString()
              .padStart(2, "0")}
          </p>
        </div>
      )}

      {expired && (
        <div style={{ color: "red" }}>
          Reservation expired
        </div>
      )}

      {reserveError && (
        <div style={{ color: "red" }}>
          Reservation failed (stock might be gone)
        </div>
      )}
    </div>
  );
};