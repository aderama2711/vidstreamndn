sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.1
nfdc face create udp://10.0.0.6
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R2.conf