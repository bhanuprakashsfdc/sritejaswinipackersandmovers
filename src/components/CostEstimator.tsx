import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COST_ESTIMATOR, LOCATIONS } from "@/constants/constants";



const CostEstimator = () => {
  const [moveType, setMoveType] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [size, setSize] = useState("");
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

  const selectClass =
    "w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  const calculate = () => {
    if (!moveType || !fromCity || !size) return;
    const isLocal = fromCity === toCity;
    const isInterstate = !isLocal && toCity;
    let baseRange;
    if (isLocal) {
      baseRange = COST_ESTIMATOR.priceRanges.find(range => range.label.includes("Local"));
    } else if (isInterstate) {
      baseRange = COST_ESTIMATOR.priceRanges.find(range => range.label.includes("Interstate"));
    } else {
      baseRange = COST_ESTIMATOR.priceRanges.find(range => range.label.includes("Regional")); // Fallback for other cases
    }

    if (!baseRange) {
      // Fallback to a default if no specific range is found, e.g., the first one
      baseRange = COST_ESTIMATOR.priceRanges[0];
      console.warn("Could not find specific price range, defaulting to first range.");
    }
    const base = baseRange;

    const sizeMultiplier = size === "1 BHK" ? 1 : size === "2 BHK" ? 1.6 : size === "3 BHK" ? 2.2 : 3;
    setEstimate({
      min: Math.round(base.min * sizeMultiplier),
      max: Math.round(base.max * sizeMultiplier),
    });
  };

  return (

      <section className="section-padding bg-navy text-primary-foreground" id="cost-estimator">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-semibold mb-6">
                <Calculator className="w-4 h-4" /> Cost Calculator
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Get an Instant Price Estimate
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Use our calculator for a ballpark figure. For an exact quote, submit the form — our team responds within 30 minutes.
              </p>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20"
                >
                  <p className="text-sm text-primary-foreground/70 mb-2">Estimated Cost Range</p>
                  <p className="font-heading font-bold text-3xl">
                    ₹{estimate.min.toLocaleString()} — ₹{estimate.max.toLocaleString()}
                  </p>
                  <p className="text-xs text-primary-foreground/50 mt-2">
                    *Actual price depends on inventory volume, floor, and special items.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <select value={moveType} onChange={(e) => setMoveType(e.target.value)} className={selectClass}>
                <option value="">Select Move Type</option>
                {COST_ESTIMATOR.moveTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} className={selectClass}>
                  <option value="">From City</option>
                  {LOCATIONS.map((l) => <option key={l.slug} value={l.city}>{l.city}</option>)}
                </select>
                <select value={toCity} onChange={(e) => setToCity(e.target.value)} className={selectClass}>
                  <option value="">To City</option>
                  {LOCATIONS.map((l) => <option key={l.slug} value={l.city}>{l.city}</option>)}
                </select>
              </div>
              <select value={size} onChange={(e) => setSize(e.target.value)} className={selectClass}>
                <option value="">Household Size</option>
                {COST_ESTIMATOR.householdSizes.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <Button
                onClick={calculate}
                className="w-full bg-primary-foreground text-navy font-bold py-6 rounded-xl text-base hover:bg-primary-foreground/90"
              >
                Calculate Estimate <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

  );
};

export default CostEstimator;
