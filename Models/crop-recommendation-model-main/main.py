# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import json

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class model_input(BaseModel):
    N:int
    P:int
    K:int
    temperature:float
    humidity:float
    ph:float
    rainfall:float
    


recommendation_model = pickle.load(open('crop_recommendation_trained.sav', 'rb'))

@app.post('/predict')
def crop_recc(input_parameters: model_input):
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    n = input_dictionary['N']
    p = input_dictionary['P']
    k = input_dictionary['K']
    temp = input_dictionary['temperature']
    hum = input_dictionary['humidity']
    ph = input_dictionary['ph']
    rain = input_dictionary['rainfall']

    input_list = [n,p,k,temp,hum,ph,rain]
    prediction = recommendation_model.predict([input_list])
    
    return prediction[0]
