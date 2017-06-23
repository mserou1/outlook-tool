package com.MockAssets;

/**
 * Created by lyoneldesmarattes on 4/27/17.
 */
public class AssetModel {

    private String assetId;
    private String partNumber;
    private String serialNumber;
    private Long latitude;
    private Long longitude;
    private String name;
    private String assetDescription;
    private String status;
    private String classification;
    private String pressure;
    private String size;
    private String assetTag;
    private Boolean active;

    public AssetModel(){

    }

    public AssetModel(String assetId, String partNumber, String serialNumber, Long latitude, Long longitude, String name,
                      String description, String status){
        this.assetId = assetId;
        this.partNumber = partNumber;
        this.serialNumber = serialNumber;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.assetDescription = description;
        this.status = status;
        this.classification = "No classification.";
        this.pressure = "N/A";
        this.size = "N/A";
        this.assetTag = "A1255947792";
        this.active = false;

    }

    public String getAssetId() {
        return assetId;
    }

    public void setAssetId(String assetId) {
        this.assetId = assetId;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Long getLatitude() {
        return latitude;
    }

    public void setLatitude(Long latitude) {
        this.latitude = latitude;
    }

    public Long getLongitude() {
        return longitude;
    }

    public void setLongitude(Long longitude) {
        this.longitude = longitude;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAssetDescription() {
        return assetDescription;
    }

    public void setAssetDescription(String description) {
        this.assetDescription = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public String getPressure() {
        return pressure;
    }

    public void setPressure(String pressure) {
        this.pressure = pressure;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getAssetTag() {
        return assetTag;
    }

    public void setAssetTag(String assetTag) {
        this.assetTag = assetTag;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
