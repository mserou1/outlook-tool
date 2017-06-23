package com.MockAssets;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.io.FileReader;
import java.util.Scanner;


/**
 * Created by lyoneldesmarattes on 4/27/17.
 */

@RestController
public class AssetController {

    @Autowired
    ObjectMapper objectMapper;

    @CrossOrigin
    @RequestMapping(value = "/assets", method = RequestMethod.GET)
    public List<AssetModel> getAssets() {
        List<AssetModel> retVal = null;
        JSONParser parser = new JSONParser();
        Object obj = null;
        try {
            obj = parser.parse(new FileReader("/Users/lyoneldesmarattes/Documents/asset-api/src/main/java/com/MockAssets/Assets.json"));
            //JSONObject jsonObject = (JSONObject) obj;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        JSONArray jsonArray = (JSONArray) obj;
        retVal = jsonArray;
        return retVal;
    }
    //@RequestMapping(value = "/assets", method = RequestMethod.POST)
    //public List<AssetModel>(@RequestBody AssetModel asset) {
    //    AssetModel assetpost = asset;
    //    List<Asset> preAssetList
    //}

}
