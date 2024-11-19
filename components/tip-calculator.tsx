'use client'
import { useState, ChangeEvent } from "react"
import { Card , CardHeader, CardDescription, CardTitle, CardContent,CardFooter } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


export default function Calculator() {
    const [billAmount , setBillAmount] = useState<number | null>(null)
    const [tipPercentage , setTipPercentage] =useState<number |null>(null)
    const [tipAmount , setTipAmount] = useState<number>(0)
    const [totalAmount , setTotalAmount] = useState <number>(0)

    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>):void =>{
        setBillAmount(parseFloat(e.target.value))
    }
    const handleTipPercentageChange =(e:ChangeEvent<HTMLInputElement>):void =>{
        setTipPercentage(parseFloat(e.target.value));
    }
    const CalculateTip =():void =>{
        if(billAmount !==null && tipPercentage !==null){
            const tip = billAmount * (tipPercentage/100)
            setTipAmount(tip);
            setTotalAmount(billAmount + tip)
        }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
        <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg ">
            <CardHeader>
                <CardTitle>
                    Tip Calculator
                </CardTitle>
                <CardDescription>
                    Enter the bill amount and tip percentage to calculate the tip andtotal.
                </CardDescription>
            </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2 ">
                        <Label htmlFor="bill-amount"> Bill Amount</Label>
                        <Input
                        id="bill-amount"
                        type="number"
                        placeholder="Enter bill amount"
                        value={billAmount !== null? billAmount:""}
                        onChange={handleBillAmountChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tip-percentage">Tip Percentage</Label>
                        <Input 
                        id="tip-percentage"
                        type="number"
                        placeholder="Enter Tip Percentage"
                        value={tipPercentage !== null? tipPercentage:""}
                        onChange={handleTipPercentageChange}
                        />
                    </div>
                    <Button onClick={CalculateTip}>Calculate</Button>
                </CardContent>
                <CardFooter className="grid gap-2">
                <div className="flex items-center justify-between">
                    <span>Tip Amount</span>
               <span className="font-bold">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total Amount:</span>
          <span className="font-bold">${totalAmount.toFixed(2)}</span>
        </div>
      
                </CardFooter>

        </Card>
      
    </div>
  )
}
